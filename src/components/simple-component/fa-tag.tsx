import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'fa-tag',
	styleUrl: 'fa-tag.scss',
})
export class MyComponent {
	@Prop() icon: string;
	@Prop() text: string;
	render() {
		let classAttr = {
			'icon': true,
			'fa': true,
		};
		classAttr['fa-' + this.icon] = true;
		return [
			<span>
				<span class={classAttr}></span>
				<span class="text">{this.text}</span>
			</span>
		];
	}
}
