import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent{
  public countries: Country[] = [];
  constructor( private countriesService: CountriesService ){

  }

searchByRegion( region:string ){
    this.countriesService.searchRegion( region )
      .subscribe( countries =>{
          this.countries = countries;
      })
}

}
