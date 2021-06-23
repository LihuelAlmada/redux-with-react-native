export interface IExistingNote {
  id: string;
  desc: string;
  completed: boolean;
}

export interface INoteReduxProps {     
  note: {
    notes: IExistingNote[];
  };
}