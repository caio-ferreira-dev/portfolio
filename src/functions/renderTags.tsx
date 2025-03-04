export default function renderTags(tags: string[]) {
    return tags.map((tag: string) => {
        return <li className='tag'>{tag}</li>
    })
}