import * as React from "react";

type ChangeSlideType = (direction: "left" | "right") => void;
type SliderProviderProps = { children: React.ReactNode };

const SliderStateContext = React.createContext<{ slideNr: number; handleChangeSlide: ChangeSlideType } | undefined>(
  undefined
);

function SliderProvider({ children }: SliderProviderProps) {
  const [slideNr, setslideNr] = React.useState(1);

  function handleChangeSlide(direction: "left" | "right") {
    switch (direction) {
      case "right": {
        if (slideNr < 3) {
          return setslideNr(slideNr + 1);
        } else return setslideNr(1);
      }
      case "left": {
        if (slideNr >= 2) {
          return setslideNr(slideNr - 1);
        } else return setslideNr(3);
      }
    }
  }

  const value = { slideNr, handleChangeSlide };
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
