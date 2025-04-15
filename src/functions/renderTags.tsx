export default function renderTags(tags: string[]) {
  return tags.map((tag: string, index: number) => {
    return (
      <li className="tag" key={index}>
        {tag}
      </li>
    );
  });
}
