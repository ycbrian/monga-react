export async function getEvent(tagList) {
  const result = await fetch(
    "https://accupassapi-open.azurewebsites.net/v3/opendata/event/list",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          'oauth_token="7551DE75640BA517B35ACAB5BFBB0FA415F8810184E9F615BD31BA8786217CB1"',
      },
      body: JSON.stringify({
        getEnd: true,
        tags: tagList,
        size: 250,
        page: 0,
        sort: "StartTime",
      }),
    }
  );

  const data = await result.json();
  return data;
}

export function dataProcessing(data, targetList, num) {
  let eventList = [];
  for (let item of data) {
    if (item.tags.includes(targetList[num])) {
      eventList.push(item);
    }
  }
  return eventList;
}
