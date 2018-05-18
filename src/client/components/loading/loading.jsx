import React from 'react';
import loading from './loading.scss';

export class Loading extends React.Component {
	constructor() {
		super();

		this.state = {
			template: '<svg class="triangle-svg" viewBox="0 0 140 141">\n<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <polygon class="triangle-polygon"  points="70 6 136 138 4 138"></polygon>\n    </g>\n  </svg>'
		}
	}

	render() {
		return (
				<div className="overlay">
					<div className="triangle-wrapper">
						{
							[1,2,3,4,5].map(item => <div key={item} className={`triangle triangle-${item}`} dangerouslySetInnerHTML={{__html: this.state.template}}></div> )
						}
						<p className="triangle-loading">Loading</p>
					</div>
				</div>
		)
	}
}


