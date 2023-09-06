export interface CitationsDetails {
    copyright: Copyright
    subjectCategories: string[]
    exportControl: ExportControl
    distributionDate: string
    fundingNumbers: any[]
    title: string
    stiType: string
    distribution: string
    submittedDate: string
    authorAffiliations: AuthorAffiliation[]
    stiTypeDetails: string
    technicalReviewType: string
    modified: string
    id: number
    sourceIdentifiers: any[]
    legacyMeta: LegacyMeta
    created: string
    center: Center
    onlyAbstract: boolean
    sensitiveInformation: number
    abstract: string
    isLessonsLearned: boolean
    disseminated: string
    cui: Cui
    meetings: Meeting[]
    publications: Publication[]
    status: string
    redistributedDate: string
    related: Related[]
    downloads: any[]
    downloadsAvailable: boolean
    index: string
  }
  
  export interface Copyright {
    disclosedInvention: boolean
    thirdPartyPermissionsProduced: boolean
    licenseType: string
    containsThirdPartyMaterial: boolean
    containsIndication: boolean
    determinationType: string
    thirdPartyContentCondition: string
  }
  
  export interface ExportControl {
    isExportControl: string
    ear: string
    itar: string
  }
  
  export interface AuthorAffiliation {
    organizationId: string
    sequence: number
    submissionId: number
    meta: Meta
    id: string
    userType: string
  }
  
  export interface Meta {
    author: Author
    organization: Organization
  }
  
  export interface Author {
    name: string
  }
  
  export interface Organization {
    name: string
    location: string
  }
  
  export interface LegacyMeta {
    __type: string
    accessionNumber: string
  }
  
  export interface Center {
    code: string
    name: string
    id: string
  }
  
  export interface Cui {}
  
  export interface Meeting {
    country: string
    submissionId: number
    endDate: string
    sponsors: Sponsor[]
    name: string
    location: string
    id: string
    startDate: string
  }
  
  export interface Sponsor {
    organizationId: string
    meta: Meta2
    meetingId: string
    id: string
  }
  
  export interface Meta2 {
    organization: Organization2
  }
  
  export interface Organization2 {
    name: string
    location: string
  }
  
  export interface Publication {
    submissionId: number
    publisher: string
    id: string
    publicationName: string
    publicationDate: string
  }
  
  export interface Related {
    disseminated: string
    id: number
    type: string
    title: string
    stiType: string
    distribution: string
    status: string
  }
  