import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  readonly NodeType?: NodeType;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

export declare class NodeType {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<NodeType>);
  static copyOf(source: NodeType, mutator: (draft: MutableModel<NodeType>) => MutableModel<NodeType> | void): NodeType;
}