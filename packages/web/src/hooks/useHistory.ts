/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { useReducer, useCallback } from "react";

interface State {
  past: string[];
  present: string | null;
  future: string[];
}

const initialState: State = {
  // Array of previous state values updated each time we push a new state
  past: [],
  // Current state value
  present: null,
  // Will contain "future" state values if we undo (so we can redo)
  future: []
};

enum ActionType {
  UNDO = "UNDO",
  REDO = "REDO",
  SET = "SET",
  CLEAR = "CLEAR"
}

interface Action {
  type: ActionType;
  newPresent?: string;
  initialPresent?: string;
}

const reducer = (state: State, action: Action): State => {
  const { past, present, future } = state;
  switch (action.type) {
    case ActionType.UNDO:
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present as string, ...future]
      };
    case ActionType.REDO:
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...(past as string[]), present as string],
        present: next,
        future: newFuture
      };
    case ActionType.SET:
      const { newPresent } = action;
      if (newPresent === present) {
        return state;
      }
      return {
        past: [...(past as string[]), present as string],
        present: newPresent as string,
        future: []
      };
    case ActionType.CLEAR:
      const { initialPresent } = action;
      return {
        ...initialState,
        present: initialPresent as string
      };
  }
};

export const useHistory = (
  initialPresent: string
): {
  state: string | null;
  set: (newPresent: string) => void;
  undo: () => void;
  redo: () => void;
  clear: () => void;
  canUndo: boolean;
  canRedo: boolean;
} => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent
  });
  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;
  // Setup our callback functions
  // We memoize with useCallback to prevent unnecessary re-renders
  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: ActionType.UNDO });
    }
  }, [canUndo, dispatch]);
  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: ActionType.REDO });
    }
  }, [canRedo, dispatch]);
  const set = useCallback(
    newPresent => dispatch({ type: ActionType.SET, newPresent }),
    [dispatch]
  );
  const clear = useCallback(
    () => dispatch({ type: ActionType.CLEAR, initialPresent }),
    [dispatch]
  );
  // If needed we could also return past and future state
  return { state: state.present, set, undo, redo, clear, canUndo, canRedo };
};
