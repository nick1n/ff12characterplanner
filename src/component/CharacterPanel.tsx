import * as React from "react";
import "./CharacterPanel.scss";
import { LicenseGroups, LicenseGroup, License } from "../data/Licenses";
import PartyModel, { Coloring } from "../model/PartyModel";
import { Characters } from "../data/Characters";

export interface Props {
	party: PartyModel;
	// changeParty(newParty: PartyModel): void;
	characterIndex: number;
	boardIndex: number;
	changeIndices(characterIndex: number, boardIndex: number): void;
}

export default class CharacterPanel extends React.PureComponent<Props> {
	private renderClassInfo(characterIndex: number, index: number) {
		const j = this.props.party.getJob(characterIndex, index);
		const selected = this.props.characterIndex === characterIndex && this.props.boardIndex === index;
		if (!j) {
			const disabled = index === 1 && !this.props.party.getJob(characterIndex, 0);
			return <button disabled={disabled} className="job nojob" aria-pressed={selected} onClick={() => this.props.changeIndices(characterIndex, index)}>
				<span className="name">No Job</span>
			</button>;
		} else {
			return <button className="job" aria-pressed={selected} onClick={() => this.props.changeIndices(characterIndex, index)}>
				<span className="name">{j.name}</span>
			</button>;
		}
	}

	private renderLicenseGroup(g: LicenseGroup, i: number, colors: Map<License, Coloring>) {
		const children = Array<React.ReactNode>();
		if (typeof g.contents[0].grants!.what === "number") {
			// display a numeric total
			let a = 0;
			let b = 0;
			let c = 0;
			// let d = 0;
			for (const l of g.contents) {
				switch (colors.get(l)) {
					case Coloring.OBTAINED: a += l.grants!.what as number; break;
					case Coloring.CERTAIN: b += l.grants!.what as number; break;
					case Coloring.POSSIBLE: c += l.grants!.what as number; break;
					// case Coloring.BLOCKED: d += l.grants!.what as number; break;
					default: continue;					
				}
			}
			if (a) { children.push(<p key={0} className="l obtained">+{a}</p>); }
			if (b) { children.push(<p key={1} className="l certain">+{b}</p>); }
			if (c) { children.push(<p key={2} className="l possible">+{c}</p>); }
			// if (d) { children.push(<p key={3} className="l blocked">+{d}</p>); }
		} else {
			// display each license (could display each granted spell if desired?)
			for (const l of g.contents) {
				let className: string;
				switch (colors.get(l)) {
					case Coloring.OBTAINED: className = "l obtained"; break;
					case Coloring.CERTAIN: className = "l certain"; break;
					case Coloring.POSSIBLE: className = "l possible"; break;
					// case Coloring.BLOCKED: className = "l blocked"; break;
					default: continue; // don't render not-at-all available licenses
				}
				children.push(<p key={l.fullName} className={className} aria-label={l.text}>{l.fullName}</p>);
			}
		}
		if (children.length) {
			return <div key={i} className="group">
				<h3 className="name">{g.name}</h3>
				{children}
			</div>;
		} else {
			return null;
		}
	}

	private renderStatInfo() {
		const colors = this.props.party.color(this.props.characterIndex);
		return LicenseGroups.map((g, i) => this.renderLicenseGroup(g, i, colors));
	}

	render() {
		return <div className="character-panel">
			<div className="character-select">
				{Characters.map((c, i) => <div className="character" key={i} aria-pressed={this.props.characterIndex === i}>
					<span className="name">{c.name}</span>
					<br />
					{this.renderClassInfo(i, 0)}
					<br />
					{this.renderClassInfo(i, 1)}
				</div>)}
			</div>
			<div className="stats">
				{this.renderStatInfo()}
			</div>
		</div>;
	}
}
