import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

    
	constructor() { }
  
    myCount: number = 0;

    ngOnInit() {
	  this.getLength();

    }

    getLength(): number {
	  this.myCount = this.satellites.length
	  return this.myCount
    }

    countByType(type: string): number {
		let count = 0;
		if (this.satellites) {
			for (let i = 0; i < this.satellites.length; i++) {
				if (this.satellites[i].type === type) {
					count++;
				}
			}
	    }
		return count;
	}

	fetchNoDuplicates(): Satellite[] {
		let seen: Object = {};
		let count: number = 0;
		let withOutDuplicates: Satellite[] = [];

		for(let i: number = 0; i < this.satellites.length; i++) {
			if(!seen[this.satellites[i].type]) {
				withOutDuplicates[count] = this.satellites[i];
				count++;
			}

			seen[this.satellites[i].type] = true
		}

		return withOutDuplicates;
	}


}