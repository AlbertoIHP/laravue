<?php

use App\Models\Book;
use App\Repositories\BookRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class BookRepositoryTest extends TestCase
{
    use MakeBookTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var BookRepository
     */
    protected $bookRepo;

    public function setUp()
    {
        parent::setUp();
        $this->bookRepo = App::make(BookRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateBook()
    {
        $book = $this->fakeBookData();
        $createdBook = $this->bookRepo->create($book);
        $createdBook = $createdBook->toArray();
        $this->assertArrayHasKey('id', $createdBook);
        $this->assertNotNull($createdBook['id'], 'Created Book must have id specified');
        $this->assertNotNull(Book::find($createdBook['id']), 'Book with given id must be in DB');
        $this->assertModelData($book, $createdBook);
    }

    /**
     * @test read
     */
    public function testReadBook()
    {
        $book = $this->makeBook();
        $dbBook = $this->bookRepo->find($book->id);
        $dbBook = $dbBook->toArray();
        $this->assertModelData($book->toArray(), $dbBook);
    }

    /**
     * @test update
     */
    public function testUpdateBook()
    {
        $book = $this->makeBook();
        $fakeBook = $this->fakeBookData();
        $updatedBook = $this->bookRepo->update($fakeBook, $book->id);
        $this->assertModelData($fakeBook, $updatedBook->toArray());
        $dbBook = $this->bookRepo->find($book->id);
        $this->assertModelData($fakeBook, $dbBook->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteBook()
    {
        $book = $this->makeBook();
        $resp = $this->bookRepo->delete($book->id);
        $this->assertTrue($resp);
        $this->assertNull(Book::find($book->id), 'Book should not exist in DB');
    }
}
