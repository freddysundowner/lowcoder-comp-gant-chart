import React, { useEffect, useMemo } from "react";

import {
  UICompBuilder,
  NameConfig,
  Section,
  withDefault,
  withExposingConfigs,
  withMethodExposing,
  eventHandlerControl,
  styleControl,
  AutoHeightControl,
  dropdownControl,
  NameConfigHidden,
  BoolControl,
  changeChildAction,
  StringControl,
  MultiCompBuilder,
  NumberControl,
  optionsControl,
  BoolCodeControl,
  ArrayControl,
  jsonControl,
  toJSONObjectArray,
  stateComp,
  getData,
  jsonObjectExposingStateControl,
  deferAction,
  valueComp,
  changeValueAction,
} from "lowcoder-sdk";
import { useResizeDetector } from "react-resize-detector";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { i18nObjs, trans } from "./i18n/comps";

import { useState } from "react";

export const CompStyles = [
  {
    name: "textSize",
    label: trans("style.textSize"),
    textSize: "textSize",
  },
  {
    name: "barBackgroundColor",
    label: trans("style.barBackgroundColor"),
    barBackgroundColor: "barBackgroundColor",
  },
  {
    name: "barProgressColor",
    label: trans("style.barProgressColor"),
    barProgressColor: "barProgressColor",
  },

  {
    name: "arrowColor",
    label: trans("style.arrowColor"),
    arrowColor: "arrowColor",
  },
  {
    name: "radius",
    label: trans("style.barCornerRadius"),
    radius: "radius",
  },
] as const;

const getStartEndDateForProject = (tasks: Task[], projectId: string) => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (task.end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
};

let GanttOption = new MultiCompBuilder(
  {
    name: StringControl,
    start: jsonControl((data: any) => {
      return new Date(data);
    }),
    end: jsonControl((data: any) => {
      return new Date(data);
    }),
    label: StringControl,
    id: StringControl,
    project: StringControl,
    progress: NumberControl,
    type: StringControl,
    hideChildren: BoolCodeControl,
    displayOrder: NumberControl,
    dependencies: jsonControl((data: any) => {
      return [data];
    }),
    // dependencies: withDefault(ArrayControl, []),
  },
  (props: any) => props
).build();
type OptionPropertyParam = {
  start?: Date;
  end?: Date;
  name?: string;
  label?: string;
  id?: string;
  progress?: number;
  type?: string;
  hideChildren?: boolean;
  displayOrder?: number;
  dependencies?: string[];
};
interface OptionCompProperty {
  propertyView(param: OptionPropertyParam): React.ReactNode;
}
GanttOption = class extends GanttOption implements OptionCompProperty {
  propertyView(param: any) {
    return (
      <>
        {this.children.name.propertyView({
          label: trans("component.name"),
        })}
        {this.children.start.propertyView({
          label: trans("component.start"),
        })}
        {this.children.end.propertyView({
          label: trans("component.end"),
        })}
        {this.children.progress.propertyView({
          label: trans("component.progress"),
        })}
        {this.children.id.propertyView({
          label: trans("component.id"),
        })}
        {this.children.type.propertyView({
          label: trans("component.type"),
        })}
        {this.children.project.propertyView({
          label: trans("component.project"),
        })}
        {this.children.dependencies.propertyView({
          label: trans("component.dependencies"),
        })}
        {this.children.hideChildren.propertyView({
          label: trans("component.hideChildren"),
        })}
        {this.children.displayOrder.propertyView({
          label: trans("component.displayOrder"),
        })}
      </>
    );
  }
};

export const GanttOptionControl = optionsControl(GanttOption, {
  initOptions: i18nObjs.defaultTasks,
  uniqField: "name",
});

const viewModeOptions = [
  {
    label: "Hour",
    value: ViewMode.Hour,
  },
  {
    label: "Quarter Day",
    value: ViewMode.QuarterDay,
  },
  {
    label: "Half Day",
    value: ViewMode.HalfDay,
  },
  {
    label: "Day",
    value: ViewMode.Day,
  },
  {
    label: "Week",
    value: ViewMode.Week,
  },
  {
    label: "Month",
    value: ViewMode.Month,
  },
  {
    label: "Year",
    value: ViewMode.Year,
  },
];
export enum DEP_TYPE {
  CONTRAST_TEXT = "contrastText",
  SELF = "toSelf",
}
function toSelf(color: string) {
  return color;
}
export const LegendStyle = [
  {
    name: "padding",
    label: trans("style.padding"),
    padding: "padding",
  },
  {
    name: "textSize",
    label: trans("style.textSize"),
    textSize: "textSize",
  },
  {
    name: "textColor",
    label: trans("style.textColor"),
    textColor: "textColor",
    depType: DEP_TYPE.SELF,
    transformer: toSelf,
    color: "#000000",
  },

  {
    name: "headerBackground",
    label: trans("style.backgroundColor"),
    depName: "background",
    depType: DEP_TYPE.SELF,
    transformer: toSelf,
  },
] as const;
export const HeaderStyle = [
  {
    name: "padding",
    label: trans("style.padding"),
    padding: "padding",
  },
  {
    name: "textSize",
    label: trans("style.textSize"),
    textSize: "textSize",
  },
  {
    name: "textColor",
    label: trans("style.textColor"),
    textColor: "textColor",
    depType: DEP_TYPE.SELF,
    transformer: toSelf,
    color: "#000000",
  },

  {
    name: "headerBackground",
    label: trans("style.backgroundColor"),
    depName: "background",
    depType: DEP_TYPE.SELF,
    transformer: toSelf,
  },
] as const;
let GantChartCompBase = (function () {
  const childrenMap = {
    styles: styleControl(CompStyles),
    autoHeight: withDefault(AutoHeightControl, "auto"),
    showHeaders: withDefault(BoolControl, true),
    data: GanttOptionControl,
    legendStyle: styleControl(LegendStyle),
    headerStyle: styleControl(HeaderStyle),
    activeViewMode: dropdownControl(viewModeOptions, ViewMode.Day),
    onEvent: eventHandlerControl([
      {
        label: "Task Date Changed",
        value: "handleTaskDateChange",
        description:
          "Specifies the function to be executed when drag taskbar event on timeline has finished.",
      },
      {
        label: "Task Clicked",
        value: "taskClick",
        description:
          "Specifies the function to be executed when drag taskbar event on timeline has finished.",
      },
      {
        label: "Task Deleted",
        value: "handleTaskDelete",
        description:
          "Specifies the function to be executed when drag taskbar event on timeline has finished.",
      },
      {
        label: "Task Progress Changed",
        value: "handleProgressChange",
        description:
          "Specifies the function to be executed when drag taskbar progress event has finished.",
      },
      {
        label: "Task Selected",
        value: "handleSelect",
        description:
          "Specifies the function to be executed on the taskbar select or unselect event.",
      },
      {
        label: "Task Expandered",
        value: "handleExpanderClick",
        description: "",
      },
      {
        label: "Task Updated",
        value: "handleTaskUpdate",
        description: "",
      },
      {
        label: "Task Progres Changed",
        value: "onProgressChanged",
        description: "",
      },
      {
        label: "Task Selected",
        value: "onTaskSelected",
        description: "",
      },
      {
        label: "Task Expanded",
        value: "onTaskExpandClicked",
        description: "",
      },
    ] as const),
  };

  return new UICompBuilder(childrenMap, (props: any, dispatch: any) => {
    let { activeViewMode } = props;
    const [dimensions, setDimensions] = useState({ width: 480, height: 300 });
    const {
      width,
      height,
      ref: conRef,
    } = useResizeDetector({
      onResize: () => {
        const container = conRef.current;
        if (!container || !width || !height) return;

        if (props.autoHeight) {
          setDimensions({
            width,
            height: dimensions.height,
          });
          return;
        }

        setDimensions({
          width,
          height,
        });
      },
    });
    let columnWidth = 65;
    if (activeViewMode === ViewMode.Year) {
      columnWidth = 350;
    } else if (activeViewMode === ViewMode.Month) {
      columnWidth = 300;
    } else if (activeViewMode === ViewMode.Week) {
      columnWidth = 250;
    }

    const handleTaskChange = (task: Task) => {
      let tasks = props.data as Task[];
      let newTasks = tasks.map((t) => (t.id === task.id ? task : t)) as Task[];
      if (task.project) {
        const [start, end] = getStartEndDateForProject(newTasks, task.project);
        const project = newTasks[
          newTasks.findIndex((t) => t.id === task.project)
        ] as Task;
        if (
          project.start.getTime() !== start.getTime() ||
          project.end.getTime() !== end.getTime()
        ) {
          const changedProject = { ...project, start, end };
          newTasks = newTasks.map((t) =>
            t.id === task.project ? changedProject : t
          );
        }
      }
      props.onEvent("handleTaskDateChange");
    };
    const handleTaskDelete = (task: Task) => {
      const conf = window.confirm("Are you sure about " + task.name + " ?");
      if (conf) {
      }
      return conf;
    };

    const handleProgressChange = async (task: Task) => {
      props.onEvent("onProgressChanged");
    };
    const handleDblClick = (task: Task) => {
      props.onEvent("onTaskClick");
    };

    const handleClick = (task: Task) => {
      props.onEvent("onTaskClick");
    };

    const handleSelect = (task: Task, isSelected: boolean) => {
      props.onEvent("onTaskSelected");
    };

    const handleExpanderClick = (task: Task) => {
      props.onEvent("onTaskExpandClicked");
    };

    return (
      <div className="Wrapper">
        {props.data.length > 0 ? (
          <Gantt
            tasks={props.data ?? []}
            viewMode={activeViewMode}
            onDateChange={handleTaskChange}
            onDelete={handleTaskDelete}
            onProgressChange={handleProgressChange}
            onDoubleClick={handleDblClick}
            onClick={handleClick}
            onSelect={handleSelect}
            onExpanderClick={handleExpanderClick}
            ganttHeight={props.autoHeight ? 0 : 300}
            headerHeight={30}
            columnWidth={columnWidth}
            fontSize={props.styles?.textSize}
            rowHeight={40}
            barCornerRadius={props.styles?.radius}
            barFill={50}
            fontFamily="Arial"
            locale="en"
            barBackgroundColor={props.styles?.barBackgroundColor}
            barBackgroundSelectedColor={
              props.styles?.barBackgroundSelectedColor
            }
            barProgressColor={props.styles?.barProgressColor}
            arrowColor={props.styles?.arrowColor}
            listCellWidth={props.showHeaders == true ? "155px" : ""}
            TaskListHeader={({
              headerHeight,
              fontFamily,
              fontSize,
              rowWidth,
            }) => {
              return (
                <div
                  style={{
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    display: "table",
                    borderBottom: "#e6e4e4 1px solid",
                    borderTop: "#e6e4e4 1px solid",
                    borderLeft: "#e6e4e4 1px solid",
                    padding: props.headerStyle.padding,
                  }}
                >
                  <div
                    style={{
                      height: headerHeight - 2,
                      display: "table-row",
                      listStyle: "none",
                      fontSize: props.headerStyle.textSize,
                      color: props.headerStyle.textColor,
                      backgroundColor: props.headerStyle.headerBackground,
                    }}
                  >
                    <div
                      className={props.headerStyle.ganttTable_HeaderItem}
                      style={{
                        minWidth: rowWidth,
                      }}
                    >
                      Name
                    </div>
                    <div
                      className={props.headerStyle.ganttTable_HeaderItem}
                      style={{
                        minWidth: rowWidth,
                        display: "table-cell",
                        verticalAlign: "-webkit-baseline-middle",
                        paddingTop: "8px",
                      }}
                    >
                      &nbsp;From
                    </div>
                    <div
                      className={props.headerStyle.ganttTable_HeaderItem}
                      style={{
                        minWidth: rowWidth,
                        display: "table-cell",
                        verticalAlign: "-webkit-baseline-middle",
                      }}
                    >
                      &nbsp;To
                    </div>
                  </div>
                </div>
              );
            }}
            TaskListTable={({
              fontFamily,
              rowHeight = "400px",
              rowWidth = "300px",
              onExpanderClick,
              tasks = props.data,
            }) => {
              return (
                <div
                  style={{
                    fontFamily: fontFamily,
                    fontSize: props.legendStyle.textSize,
                    width: "100%",
                    overflow: "hidden",
                    backgroundColor: props.legendStyle.headerBackground,
                  }}
                >
                  {tasks.map((t: Task) => {
                    let expanderSymbol = "";
                    if (t.hideChildren === false) {
                      expanderSymbol = "▼";
                    } else if (t.hideChildren === true) {
                      expanderSymbol = "▶";
                    }

                    return (
                      <div
                        style={{
                          height: rowHeight,
                          padding: props.legendStyle.padding,
                          width: "100%",
                          display: "flex",
                          color: props.legendStyle.textColor,
                        }}
                        key={`${t.id}row`}
                      >
                        <div
                          style={{
                            minWidth: rowWidth,
                            maxWidth: rowWidth,
                          }}
                          title={t.name}
                        >
                          <div>
                            <div onClick={() => onExpanderClick(t)}></div>
                            <div>{t.name}</div>
                          </div>
                        </div>
                        <div
                          style={{
                            minWidth: rowWidth,
                            maxWidth: rowWidth,
                          }}
                        >
                          &nbsp;{new Date(t.start).toLocaleDateString()}
                        </div>
                        <div
                          style={{
                            minWidth: rowWidth,
                            maxWidth: rowWidth,
                          }}
                        >
                          &nbsp;{new Date(t.end).toLocaleDateString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          />
        ) : (
          <></>
        )}
      </div>
    );
  })
    .setPropertyViewFn((children: any) => {
      return (
        <>
          <Section name="Basic">
            {children.activeViewMode.propertyView({
              label: "View Mode",
            })}
            {children.showHeaders.propertyView({
              label: "Show Headers",
            })}
            {children.data.propertyView({})}
          </Section>
          <Section name="Interaction">
            {children.onEvent.propertyView()}
          </Section>
          {children.showHeaders.getView() && (
            <Section name={"Header Style"}>
              {children.headerStyle.getPropertyView()}
            </Section>
          )}
          {children.showHeaders.getView() && (
            <Section name={"Legend Style"}>
              {children.legendStyle.getPropertyView()}
            </Section>
          )}
          <Section name="Styles">
            {children.autoHeight.getPropertyView()}
            {children.styles.getPropertyView()}
          </Section>
        </>
      );
    })
    .build();
})();

GantChartCompBase = class extends GantChartCompBase {
  autoHeight(): boolean {
    return this.children.autoHeight.getView();
  }
};

GantChartCompBase = withMethodExposing(GantChartCompBase, [
  {
    method: {
      name: "setData",
      description: "",
      params: [
        {
          name: "data",
          type: "JSON",
          description: "JSON value",
        },
      ],
    },
    execute: (comp: any, values: any[]) => {
      comp.children.data.dispatchChangeValueAction(
        values.length > 0 ? JSON.stringify(values, null, 2) : []
      );
    },
  },
]);

export default withExposingConfigs(GantChartCompBase, [
  new NameConfig("data", trans("component.data")),
  NameConfigHidden,
]);
