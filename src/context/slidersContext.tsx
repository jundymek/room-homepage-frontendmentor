import * as React from "react";

type Action = { type: "left" } | { type: "right" };
type Dispatch = (action: Action) => void;
type State = { position: number };
type SliderProviderProps = { children: React.ReactNode };

const SliderStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function sliderReducer(state: State, action: Action) {
  switch (action.type) {
    case "right": {
      if (state.position < 3) {
        return { position: state.position + 1 };
      } else return { position: 1 };
    }
    case "left": {
      if (state.position >= 2) {
        return { position: state.position - 1 };
      } else return { position: 3 };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function SliderProvider({ children }: SliderProviderProps) {
  const [state, dispatch] = React.useReducer(sliderReducer, {
    position: 1,
  });
  const value = { state, dispatch };
  return <SliderStateContext.Provider value={value}>{children}</SliderStateContext.Provider>;
}

function useSliderImage() {
  const context = React.useContext(SliderStateContext);
  if (context === undefined) {
    throw new Error("useSliderImage must be used within a SliderProvider");
  }
  return context;
}

export { SliderProvider, useSliderImage };
