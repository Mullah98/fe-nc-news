import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleCommentsById, fetchArticleId } from "../Api";
import { Link } from 'react-router-dom'
import CommentsCard from "./CommentsCard";
// import image from '../src/loading-img.gif'

export default function SingleArticle () {
    const [singleArticle, setSingleArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showComments, setShowComments] = useState(false)
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticleId(article_id)
        .then(article => {
            setSingleArticle(article)
            setIsLoading(false)
        })
        fetchArticleCommentsById(article_id)
        .then(articleComments => {
            setComments(articleComments)
        })
    }, [])

    const handleShowComments = () => {
        setShowComments(show => !show)
    }

    if (isLoading) {
        return (
            <h1 className="loading">Loading your article.....</h1>
        )
    }

    return (
        <>
        <div className="single-article">
            <h2 className="title">{singleArticle.title}</h2>
            <img src={singleArticle.article_img_url}></img>
            <h3 className="author">Author: {singleArticle.author}</h3>
            <h3 className="description">{singleArticle.body}</h3>

            <button className="comment-btn" onClick={handleShowComments}>
                {!showComments ? 'Click me to see comments!' : 'Click me to hide comments!'}
            </button>
        
        </div>

        {showComments && (
        <div className="comments-card">
        {comments.map(comment => {
            return <CommentsCard key={comment.comment_id} comment={comment}/>
        })}
        </div>
        )}
        </>
    )
}