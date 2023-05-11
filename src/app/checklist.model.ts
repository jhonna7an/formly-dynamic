export interface ChecklistViewModel {
    fields: Field[]
  }
  
  export interface Field {
    type: string
    fieldGroup: FieldGroup[]
  }
  
  export interface FieldGroup {
    key: string
    id: string
    templateOptions: TemplateOptions
    fieldGroupClassName: string
    fieldGroup: FieldGroup[]
  }
  
  export interface TemplateOptions {
    label: string
    disabled: boolean
    required: boolean
  }

  