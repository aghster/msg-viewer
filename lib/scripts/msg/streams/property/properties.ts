import { PtypBinary, PtypObject, PtypString, PtypString8,PtypTime, type PropertyType } from "./property-types";

export const enum PropertySource { 
  Stream, // Property can be found in a dedicated stream
  Property // Property is located in property stream
}

export const ROOT_PROPERTIES: Property[] = [
  { id: "0E06", name:"date", types: [PtypTime], source: PropertySource.Property },
  { id: "0037", name:"subject", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "0c1a", name:"senderName", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "0c1f", name:"senderEmail", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "1000", name:"body", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "1013", name:"bodyHTML", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "1009", name:"bodyRTF", types: [PtypBinary, PtypString8], source: PropertySource.Stream },
  { id: "007d", name:"headers", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "0E04", name:"toRecipients", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "0E03", name:"ccRecipients", types: [PtypString, PtypString8], source: PropertySource.Stream },
];

export const ATTACH_PROPERTIES: Property[]= [
  { id: "3703", name:"extension", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "3707", name:"fileName", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "370e", name:"mimeType", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "3A0C", name:"language", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "3001", name:"displayName", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "3701", name:"content", types: [PtypBinary], source: PropertySource.Stream },
  { id: "3701", name:"embeddedMsgObj", types: [PtypObject], source: PropertySource.Stream },
];

export const RECIP_PROPERTIES: Property[] = [
  { id: "3001", name:"name", types: [PtypString, PtypString8], source: PropertySource.Stream },
  { id: "39fe", name:"email", types: [PtypString, PtypString8], source: PropertySource.Stream },
];

export interface Property {
  id: string,
  name: string,
  types: PropertyType[],
  source: PropertySource,
}
