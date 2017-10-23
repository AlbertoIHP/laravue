<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class BookApiTest extends TestCase
{
    use MakeBookTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateBook()
    {
        $book = $this->fakeBookData();
        $this->json('POST', '/api/v1/books', $book);

        $this->assertApiResponse($book);
    }

    /**
     * @test
     */
    public function testReadBook()
    {
        $book = $this->makeBook();
        $this->json('GET', '/api/v1/books/'.$book->id);

        $this->assertApiResponse($book->toArray());
    }

    /**
     * @test
     */
    public function testUpdateBook()
    {
        $book = $this->makeBook();
        $editedBook = $this->fakeBookData();

        $this->json('PUT', '/api/v1/books/'.$book->id, $editedBook);

        $this->assertApiResponse($editedBook);
    }

    /**
     * @test
     */
    public function testDeleteBook()
    {
        $book = $this->makeBook();
        $this->json('DELETE', '/api/v1/books/'.$book->id);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/books/'.$book->id);

        $this->assertResponseStatus(404);
    }
}
