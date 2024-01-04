import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/15836394?v=4"
                    />
                </div>
                <div className={styles.authorInfo}>
                    <strong>Alexandre Soares</strong>
                    <span>Web Developer</span>
                </div>
                <time dateTime='04 de Janeiro as 17:55h'>
                    Publicado ha 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>
                    <a href="#">#nlw</a>
                    <a href="#">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}