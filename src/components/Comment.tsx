import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void; 
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)


function handleDeleteComment() {
  onDeleteComment(content)
}

function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1
  })
}


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mateusfsdev.png" alt=''/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mateus F Dev</strong>
              <time title='11 de novembro ás 8:46h' dateTime='2022/11/05  8:46:23 a.m.'>ha 1hr atras</time>


            </div>

            <button onClick={handleDeleteComment} title='Deletar Comentario'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>



    </div>
  )
}