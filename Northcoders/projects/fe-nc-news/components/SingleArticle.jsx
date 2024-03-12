import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleId } from "../Api";

export default function SingleArticle () {
    const [singleArticle, setSingleArticle] = useState({})
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticleId(article_id)
        .then(article => {
            setSingleArticle(article)
        })
    }, [])

    console.log(singleArticle);

    return (
        <div className="single-article">
            <h2 className="title">{singleArticle.title}</h2>
            <img src={singleArticle.article_img_url}></img>
            <h3>Author: {singleArticle.author}</h3>
            <h3>{singleArticle.body}</h3>
            <h4>Created: {singleArticle.created_at}</h4>
        </div>
    )
}