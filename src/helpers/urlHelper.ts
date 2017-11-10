export const ViewPage = {
  CONTROL: 'control',
  DASHBOARD: 'dashboard'
}

// index of view name in url parts
const VIEW_INDEX = 2;

export interface ParamsData {  // Params inject to page from Router or component wrapped withRouter
  agent_id: string;
}

interface BuildUrlProps {
  agent_id: string,
  viewPage: string;
  tab?: string;
  itemId?: string;
}

export function buildURL(props: BuildUrlProps) {
  if (!!props.itemId) {
    // TODO: handle item_id link
  } else if (!!props.tab) {
    // TODO: handle tab link
  }

  return `/agent/${props.agent_id}/${props.viewPage}`;
}

export function getViewPageFromURL(location: Location) {
  let myLocation = location.href;
  let result = '';
  const locationPath = location.origin;
  myLocation = myLocation.replace(locationPath + '/', '');
  const urlParameters = myLocation.split('/');

  if (urlParameters.length > VIEW_INDEX) {
    result = urlParameters[VIEW_INDEX];
  }

  return result;
}
