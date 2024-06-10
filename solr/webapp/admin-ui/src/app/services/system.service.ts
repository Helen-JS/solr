import { Injectable } from '@angular/core';
import {
  IResourceMethodPromise,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams
} from "@ngx-resource/core";

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix:'api/node'
  }
)
export class SystemInformationService extends Resource {

  @ResourceAction({
      path: 'system'
    })
  getSystemInfo!: IResourceMethodPromise<void, SystemInfoResponse>;
  constructor(handler:ResourceHandler){
    super(handler);
  }

}
