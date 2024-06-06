import {Component} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {Thread} from "../../models/threads/thread/Thread";
import {ThreadServiceInfoService} from "../../services/threads/thread-service-info.service";
import {ThreadResponse} from "../../models/threads/ThreadResponse";
import {ThreadStackTrace} from "../../models/threads/thread/ThreadStackTrace";
import {
  ToggleStackTraceButtonComponent
} from "../core/threads/toggle-stack-trace-button/toggle-stack-trace-button.component";

@Component({
  selector: 'app-threads',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    ToggleStackTraceButtonComponent
  ],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.scss'
})
export class ThreadsComponent {

  private _threads: Thread[] = [];

  constructor(private _threadService: ThreadServiceInfoService) {
  }

  public toggleStackTrace(thread: Thread): void {
    thread.showStackTrace = !thread.showStackTrace;
  }

  ngOnInit(): void {
    this._threads = [];
  }

  public isLocked(lock: string | undefined): boolean {
    return !!lock
  }

  public isNotEmpty(stackTrace: any[]): boolean {
    return !!stackTrace
  }

  private prepareThreads(th: ThreadResponse): void {
    let threadDump: Thread[] = th.system.threadDump;
    for (let i: number = 1; i <threadDump.length ; i+=2) {
      let thread: Thread = threadDump[i];
      thread.showStackTrace = false;
      if (!! thread.stackTrace) {
        let sTrace: ThreadStackTrace[] = [];
        for (let j: number = 0; j < thread.stackTrace.length; j++) {
          let sTrc: string = thread.stackTrace[j] + "";
          sTrace.push({id: thread.id + ":" + j, traceInfo: sTrc.replace("(", "\u200B(")})
        }
        thread.stackTrace = sTrace;
      }
    }
    this._threads = threadDump;
  }

  public getThreads(): Thread[]{
    this.refreshThreads();
    return this._threads
  }


  private async refreshThreads(): Promise<void> {
    await this._threadService.getThreads().then(threads => this.prepareThreads(threads))
  }

  public toggleStackTraces(isDisplay: boolean): void {
    this.refreshThreads();
    for (let thread of this._threads) {
      thread.showStackTrace = isDisplay;
    }
  }

  protected readonly isOdd = isOdd;
}
