export async function fetchItems(limit = "", userId = "") {
  const response = await fetch(
    `${process.env.HOST}/api/lists?limit=${limit}&userId=${userId}`,
    {
      next: { revalidate: 60 },
    }
  );
  const data = await response.json();
  return data;
}

export default async function CreatedLists(props) {
  const userId = props.userId !== undefined ? props.userId : "";

  const itemsList = await fetchItems(props.limit, userId);

  if (itemsList) {
    const createdLists = itemsList.map((list, index) => {
      return (
        <li key={index} className="my-2">
          🗒{" "} {index+1}) 
          <a
            className="hover:underline hover:underline-offset-1"
            href={`/lists/${list.id}`}
            title={list.title}
          >
          {list.title}
          </a>
        </li>
      );
    });

    return <ul className="pb-10">{createdLists}</ul>;
  } else {
    return <></>;
  }
}
