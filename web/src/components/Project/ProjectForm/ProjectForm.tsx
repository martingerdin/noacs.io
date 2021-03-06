import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const ProjectForm = (props) => {
  const onSubmit = (data) => {

    
    
    
    
    
    
    
    
    
    
    props.onSave(data, props?.project?.id)
  }

  return (
    <div className="rw-form-wrapper">
	<Form onSubmit={onSubmit} error={props.error}>
            <FormError
              error={props.error}
              wrapperClassName="rw-form-error-wrapper"
              titleClassName="rw-form-error-title"
              listClassName="rw-form-error-list"
            />


	    <Label
              name="id"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
		ID
            </Label>
            
            <TextField
              name="id"
              defaultValue={props.project?.id}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true,
			    setValueAs: v => v.toLowerCase(), }}
	      style={{textTransform: "lowercase"}}
            />
            

            <FieldError name="id" className="rw-field-error" />
	    
            <Label
              name="title"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
		Title
            </Label>
            
            <TextField
              name="title"
              defaultValue={props.project?.title}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true }}
            />
            

            <FieldError name="title" className="rw-field-error" />

            <Label
              name="aim"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
		Aim
            </Label>
            
            <TextField
              name="aim"
              defaultValue={props.project?.aim}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true }}
            />
            

            <FieldError name="aim" className="rw-field-error" />

            <Label
              name="design"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
		Design
            </Label>
            
            <TextField
              name="design"
              defaultValue={props.project?.design}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true }}
            />
            

            <FieldError name="design" className="rw-field-error" />

            <div className="rw-button-group">
		<Submit
		  disabled={props.loading}
		  className="rw-button rw-button-blue"
		>
		    Save
		</Submit>
            </div>
	</Form>
    </div>
  )
}

export default ProjectForm
