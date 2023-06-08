import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlgorithmTextDocuments } from 'src/app/model/AlgorithmTextDocuments';
import { AlgorithmTextDocumentsRequest } from 'src/app/services/AlgorithmTextDocumentsRequest';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  form: FormGroup;
  results: any;

  constructor(private fb: FormBuilder, private algorithmService: AlgorithmTextDocumentsRequest) {
    this.form = this.fb.group({
      epsilon: ['', Validators.required],
      n: ['', Validators.required],
      minPts: ['', Validators.required],
      numberFiles: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.form.valid) {
      const values: AlgorithmTextDocuments = this.form.value;
      this.algorithmService.runAlgorithm(values).subscribe(
        (data: any) => {
          this.results = data;
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
