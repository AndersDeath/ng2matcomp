import { NgModule } from '@angular/core';
import {
	// form controls
	MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatRadioModule,
	// navigation
	MatMenuModule, MatSidenavModule, MatToolbarModule,
	// layout
	MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
	// buttons and indicators
	MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
	// popups and modals
	MatDialogModule, MatTooltipModule, MatSnackBarModule,
	// data table
	MatTableModule, MatSortModule, MatPaginatorModule,
	// misc
	MatOptionModule, MatRippleModule,
	// icons
	MatIconRegistry

} from '@angular/material';

import { OverlayModule } from '@angular/cdk/overlay';

import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
	providers: [ MatIconRegistry ],
	imports: [
		// form controls
		MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatMomentDateModule, MatInputModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatRadioModule,
		// navigation
		MatMenuModule, MatSidenavModule, MatToolbarModule,
		// layout
		MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
		// buttons and indicators
		MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
		// popups and modals
		MatDialogModule, MatTooltipModule, MatSnackBarModule,
		// data table
		MatTableModule, MatSortModule, MatPaginatorModule,
		// misc
		MatOptionModule, MatRippleModule,
		// cdk
		OverlayModule
	],
	exports: [
		// form controls
		MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatMomentDateModule, MatInputModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatRadioModule,
		// navigation
		MatMenuModule, MatSidenavModule, MatToolbarModule,
		// layout
		MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
		// buttons and indicators
		MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
		// popups and modals
		MatDialogModule, MatTooltipModule, MatSnackBarModule,
		// data table
		MatTableModule, MatSortModule, MatPaginatorModule,
		// misc
		MatOptionModule, MatRippleModule,
		// cdk
		OverlayModule
	]
})
export class CustomMaterialModule {}
