import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder } from "@angular/forms";
import { LocalStorageService } from "../localstorage.service";

interface IBook {
  id: string;
  author: string;
  name: string;
  review: string;
  rating: number;
}

@Component({
  selector: 'books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.css']
})
export class BooksMainComponent {

  books: IBook[] = [];

  form = this.fb.group({
    author: [],
    name: [],
    review: [],
    rating: []
  });

  constructor(
    private modalService: NgbModal,
    private lsService: LocalStorageService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.books = JSON.parse(this.lsService.get('books') || '')
  }

  openModal(instance: any) {
    this.modalService.open(instance);
  }

  closeModal() {
    this.modalService.dismissAll()
  }

  onRemoveBook(id: string) {
    this.books = this.books.filter(todo => todo.id !== id);
    this.lsService.set('books', JSON.stringify(this.books));
  }

  onAddBook() {
    this.books.push({ ...this.form.getRawValue(), id: (Math.floor(Math.random() * 100000)).toString() });
    this.lsService.set('books', JSON.stringify(this.books));
    this.form.patchValue({
      author: '',
      name: '',
      review: '',
      rating: '',
    });
    this.closeModal();
  }
}
