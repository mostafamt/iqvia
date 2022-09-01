import React from "react";
import Button from "@mui/material/Button";
import CheckButton from "./CheckButton";
import FilterAccordion from "./FilterAccordion";
import { add_filter, remove_filter } from "../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

function PopoverContent({ content, category, moreFiltersContent = false }) {
  // Redux
  const dispatch = useDispatch();
  const push = (parent, cnt) => dispatch(add_filter(parent, cnt));
  const reset = (parent, cnt) => dispatch(remove_filter(parent));
  let buttons = useSelector((state) => {
    return state.filter[category];
  });

  // Component State
  const [checkedButtons, setCheckedButtons] = React.useState(buttons);

  const onAddButton = (checkedButton) => {
    setCheckedButtons([...checkedButtons, checkedButton]);
  };

  const onRemoveButton = (unCheckButton) => {
    setCheckedButtons(
      checkedButtons.filter(
        (checkedButton) => checkedButton.id !== unCheckButton.id
      )
    );
  };

  const onApplyHandler = () => {
    push(category, checkedButtons);
  };

  const onCancelHandler = () => {
    // Clear all checked buttons
    setCheckedButtons([]);
    // trigger Redux
    reset(category);
  };

  const isButtonChecked = (id) => {
    return checkedButtons.some((e) => e.id === id);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      p: 4,
    },
    buttons: {
      display: "flex",
      marginTop: "1rem",
    },
    cancelButton: {
      display: "flex",
    },
    applyButton: { ml: "auto" },
  };

  return (
    <div style={styles.container}>
      <div>
        {content.map((item, index) => {
          return (
            <CheckButton
              key={item.id}
              content={content[index]}
              onAddButton={onAddButton}
              onRemoveButton={onRemoveButton}
              checked={isButtonChecked(item.id)}
            />
          );
        })}
      </div>
      <div style={styles.buttons}>
        <Button sx={styles.cancelButton} onClick={onCancelHandler}>
          cancel
        </Button>
        <Button sx={styles.applyButton} onClick={onApplyHandler}>
          apply
        </Button>
      </div>
    </div>
  );
}

export default PopoverContent;
