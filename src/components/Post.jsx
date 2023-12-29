const names = ["Zakaria","EL mahdi"]
const choosenName = Math.random() > 0.5 ? names[0] : names[1]
function Post({author,body}){


    return (
        <ul>
            <li>{choosenName}</li>
            <li>This is awesome !</li>
            <li>{author}</li>
            <li>{body}</li>
        </ul>
    )
}
export default Post;