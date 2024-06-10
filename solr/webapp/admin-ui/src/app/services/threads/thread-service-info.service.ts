import { Injectable } from '@angular/core';
import {IResourceMethodPromise, Resource, ResourceAction, ResourceHandler, ResourceParams} from "@ngx-resource/core";
import {ThreadResponse} from "../../models/threads/ThreadResponse";

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
    pathPrefix: 'api/node'
  }
)
export class ThreadServiceInfoService extends Resource {

  @ResourceAction({
    path: 'threads'
  })
  getThreads!: IResourceMethodPromise<void, ThreadResponse>;

  constructor(handler: ResourceHandler) {
    super(handler);
  }
}
