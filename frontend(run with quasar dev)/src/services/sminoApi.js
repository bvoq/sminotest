class Issue {
    constructor(avatar, name) {
      this.avatar = avatar;
      this.name = name;
    }
}


function getIssueList () {
    issueList = []
    await axios
    .get('https://smino.api/issues')
    .then(response =>
    {
        // response.data = [{avatar: 'hi', name: 'Pascal'}, {avatar: 'hi2', name: 'Matthias'},]
        response.data.forEach((issue) => issueList.push(new Issue( issue.avatar, issue.name )))
    })
    return issueList
}

export default {
    getIssueList
}

