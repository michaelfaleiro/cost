import ProjectForm from '../project/projectForm'

import styles from './NewProject.module.css'


function NewProject() {
    return ( 
        <div className={styles.newproject_container}>
            <h1>Novo Projeto</h1>
            <p>Crie seu projeto para depois adicionar serviços </p>
            <p>Formulário</p>
            <ProjectForm />
        </div>
    )

}


export default NewProject