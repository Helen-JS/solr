import {Component, Inject} from '@angular/core';
import {SystemInfoResponse} from "../../models/systeminfo/SystemInfoResponse"
import {SizeUnitConverterPipe} from "../../pipes/sizeconverter/size-unit-converter-pipe.pipe";
import {DateConverter} from "../../utils/DateConverter";
import {NgClass, NgIf} from "@angular/common";
import {TimeAgoPipe} from "../../pipes/timeconverter/time-ago.pipe";
import {SecurityDashboardComponent} from "../security-dashboard/security-dashboard.component";
import {SystemInformationService} from "../../services/system/system-information.service";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SizeUnitConverterPipe, NgClass, TimeAgoPipe, NgIf, SecurityDashboardComponent],
  providers:[SystemInformationService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private info!: SystemInfoResponse

  constructor(private _systemInformationService: SystemInformationService,
              @Inject(DateConverter) private _coverter: DateConverter) {
  }

  ngOnInit() {
    this._systemInformationService.getSystemInfo().then(value => {this.info = value})
  }

  averageLoad(): string {
    return this.info.system.systemLoadAverage.toFixed(2);
  }

  isDataAvailable(): boolean {
    return !!this.info
  }

  startTime(): number {
    return this.info.jvm.jmx.upTimeMs
  }

  solrSpecificationVersion(): string {
    return this.info.lucene.solrSpecVersion;
  }

  solrImplementationVersion(): string {
    return this.info.lucene.solrImplVersion;
  }

  luceneSpecificationVersion(): string {
    return this.info.lucene.luceneSpecVersion;
  }
  luceneImplementationVersion(): string {
    return this.info.lucene.luceneSpecVersion;
  }

  isMemoryInformationAvailable(): boolean {
   return !!(this.maxMemory() && this.freeMemory());
  }

  isSwapInformationAvailable(): boolean {
   return !!(this.swapMax() && this.swapFree());
  }

  maxMemory(): number {
    return this.info.system.totalPhysicalMemorySize;
  }

  availableMemory(): number {
    return this.maxMemory() - this.freeMemory();
  }

  freeJvmMemory(): string {
    return this.info.jvm.memory.free;
  }

  memoryInPercents(): string {
    return this.displayValueInPercents(this.availableMemory(), this.maxMemory());
  }

  private displayValueInPercents(current: number, max: number) {
    return `${(current / max * 100).toFixed(1)} %`;
  }

  swapAvailable(): number {
    return this.swapMax() - this.swapFree();
  }
  swapMax(): number {
    return this.info.system.totalSwapSpaceSize;
  }

  swapInPercents(): string {
    return this.displayValueInPercents(this.swapAvailable(), this.swapMax());
  }

  fileDescriptors(): string{
    return this.displayValueInPercents(this.openedDescriptors(), this.maxDescriptors());
  }

  openedDescriptors(): number {
    return this.info.system.openFileDescriptorCount;
  }
  maxDescriptors(): number {
    return this.info.system.maxFileDescriptorCount;
  }

  private freeMemory(): number {
    return this.info.system.freePhysicalMemorySize;
  }
  noIformationAvailable(): boolean {
    return !(this.isMemoryInformationAvailable() && this.isSwapInformationAvailable()
      && this.isFileDescriptorInformationAvailable());
  }

  isFileDescriptorInformationAvailable(): boolean {
    return !!(this.openedDescriptors() && this.maxDescriptors());
  }

  private swapFree():number {
    return this.info.system.freeSwapSpaceSize;
  }

  javaMachineInformation(): string {
    return `${this.info.jvm.name} ${this.info.jvm.version}`;
  }

  amountProcessors(): number {
   return this.info.jvm.processors;
  }

  isOldRelease(): boolean {
    let appDateRelease = this._coverter.convertDateFromServerVersion(this.solrImplementationVersion());
   return Date.now() - appDateRelease.getTime() > 365
  }

  upTime(): number {
    return this.info.jvm.jmx.upTimeMs;
  }
  cmdArguments(): string[] {
    return this.info.jvm.jmx.commandLineArgs
  }
  javaMemoryTotal(): number {
    return this.info.jvm.memory.raw.total;
  }
  javaMemoryMax(): number {
    return this.info.jvm.memory.raw.max;
  }
  javaMemoryUsed(): number {
    return this.info.jvm.memory.raw.used;
  }
  javaMemoryUsedPercentage(): string {
    return this.info.jvm.memory.raw["used%"].toFixed(1);
  }

  javaMemoryPercentage(): string {
    return this.displayValueInPercents(this.javaMemoryUsed(), this.javaMemoryMax());
  }

  javaMemoryTotalPercentage(): string {
    return this.displayValueInPercents(this.javaMemoryTotal(), this.javaMemoryMax());
  }

  protected readonly isOdd = isOdd;
}
