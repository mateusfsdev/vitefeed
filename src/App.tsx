import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import { PostType, Post } from './components/Post'

import styles from './App.module.css'

import './global.css'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mateusfsdev.png',
      name: 'Mateus F Dev',
      role: 'mobile developer',
    },
    content: [
      { type:'paragraph', content:'Fala galeraa 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-01-11 21:23:54'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diegin',
      role: 'CTO developer',
    },
    content: [
      { type:'paragraph', content:'brota na base 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'eo.bicho/meu-cumpadi' },
    ],
    publishedAt: new Date('2023-12-27 21:23:54'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'developer',
    },
    content: [
      { type:'paragraph', content:'show de boleta 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-11-11 21:23:54'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
         <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

