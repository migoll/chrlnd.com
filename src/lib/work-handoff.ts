// What the work list tells the sheet when a project is clicked: where the preview
// card was (so the open view can grow out of it), whether to animate at all, what
// to refocus on close, and whether closing can simply step back in history
export const handoff: {
  from: DOMRect | null;
  animate: boolean;
  trigger: HTMLElement | null;
  pushed: boolean;
} = { from: null, animate: false, trigger: null, pushed: false };
