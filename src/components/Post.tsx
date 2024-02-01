import { format, formatDistanceToNow, } from 'date-fns'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content  {
  type: 'paragraph' | 'link';
  content: string;

}

 export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType,
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacanudo meu cnpjoto 🔥🔥'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const  publishedDateFormatted  =  format( post.publishedAt ,  "dd 'de' LLLL 'ás' HH:mm'h'",
    {  locale : ptBR  } )

  const  publisheDateRelativeToNow  =  formatDistanceToNow( post.publishedAt,
    {  addSuffix : true ,  locale : ptBR } )



  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('vai publicar sem escrever nada seu zé bunda? vai nao car4i')
  }

  function deleteComment(commentToDelete: string) {
    const CommentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    
    
    
    setComments(CommentsWithoutDeletedOne);

  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src={post.author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publisheDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>

          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }

        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>

        <textarea
          name='comment'
          placeholder='deixe um comentario'
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
          
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >
            send!
          </button>
        </footer>
      
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
             key={comment}
             content={comment}
             onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}