import { repliesStructure } from "./replies.interface";

export class RepliesModal implements repliesStructure {
  constructor(public id: string, public title: string, public desc: string) {}
}
