import { keepService } from "../services/keep-service";


export function KeepPreview({ keep }) {
    return (
        <article>
            <h3>{keep.title}</h3>
            <div>{keep.info.txt}</div>
            {/* <div>{keep.info.text}</div> */}
        </article>
    )
}