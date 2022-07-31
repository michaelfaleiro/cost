import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/Submit'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" 
            text="Nome do Projeto" 
            name="name" 
            placeholder="Insira o Nome do Projeto" />
            
            <Input type="number" 
            text="Orçamento do Projeto" 
            name="budget" 
            placeholder="Insira o Orçamento Completo" />

            <Select name="category_id" text="Selecione a Categoria" />
            
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm