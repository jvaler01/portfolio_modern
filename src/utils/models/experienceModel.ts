export interface experienceDataModel {
  company: string;
  position: string;
  date: string;
  content: expetienceContent[];
}
export interface expetienceContent {
  project: string;
  content: string;
}