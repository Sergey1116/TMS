import React from 'react'
import ReactDOM from 'react-dom';
import NotesSearch from './components/notes/notes';

const notes = [
    "Create user stories and issues, plan sprints, and distribute tasks across your software team.",
    "Prioritize and discuss your team’s work in full context with complete visibility.",
    "Ship with confidence and sanity knowing the information you have is always up-to-date.",
    "Improve team performance based on real-time, visual data that your team can put to use.",
    "Transform product requirements in Confluence into a Jira Software backlog with one click.",
    "Upgrade your workflow with Confluence, Bitbucket, and hundreds of other developer tools."];

ReactDOM.render(
    <React.StrictMode>
        <NotesSearch props = {notes}/>
    </React.StrictMode>
    ,
    document.getElementById('root')
  );
  