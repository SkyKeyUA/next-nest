import { ObjectId } from 'mongoose';

class CreateCommentDto {
  readonly username: string;
  readonly text: string;
  readonly trackId: ObjectId;
}

export { CreateCommentDto };
