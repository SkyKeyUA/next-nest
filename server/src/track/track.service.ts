import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track } from './schemas/track.schema';
import { Model, ObjectId } from 'mongoose';
import { Comment } from './schemas/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<Track>,
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}
  async create(dto: CreateTrackDto): Promise<Track> {
    const track = await this.trackModel.create({ ...dto, listens: 0 });
    return track;
  }

  async getAll(): Promise<Track[]> {
    const tracks = await this.trackModel.find();
    return tracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    //const track = await this.trackModel.findById(id);
    const track = await this.trackModel.findById(id).populate('comments');
    return track;
  }

  async update(id: ObjectId, updateData: Partial<CreateTrackDto>) {
    const track = await this.trackModel.updateOne({ _id: id }, updateData);
    return updateData;
  }

  async delete(id: ObjectId) {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment.id);
    await track.save();
    return comment;
  }
}
