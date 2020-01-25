import REact from 'react';

const CardSkill = ({title, body}) => (
    <div class="skill">
        <h6 class="skill__title">{title}</h6>
        <div class="skill__loader">
            <p>{body}</p>
        </div>
    </div>
);

export default CardSkill;