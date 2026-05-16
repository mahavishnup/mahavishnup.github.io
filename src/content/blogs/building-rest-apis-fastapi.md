---
title: 'Building REST APIs with FastAPI'
slug: 'building-rest-apis-fastapi'
excerpt: 'Learn how to build high-performance REST APIs using Python and FastAPI with async support, Pydantic validation, and auto-generated docs.'
date: '2024-03-15'
tags: ['Python', 'FastAPI', 'API', 'Backend']
published: true
coverImage: '/assets/fastapi-rest.png'
---

# Building REST APIs with FastAPI

FastAPI is one of the fastest Python web frameworks available today. It leverages Python type hints to provide automatic validation, serialization, and documentation. Let's build a complete CRUD API.

## Why Choose FastAPI?

- **Blazing Fast** — On par with Node.js and Go thanks to Starlette and Uvicorn
- **Auto Documentation** — Swagger UI and ReDoc out of the box
- **Type Safety** — Full editor support with Pydantic models
- **Async Native** — Built-in async/await support

## Installation

```bash
pip install fastapi uvicorn sqlalchemy
```

## Project Structure

```
my-api/
├── main.py
├── models.py
├── schemas.py
├── database.py
└── requirements.txt
```

## Setting Up the Database

```python
# database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:password@localhost/mydb"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

## Defining Models

```python
# models.py
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.sql import func
from database import Base

class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    content = Column(String, nullable=False)
    published = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
```

## Pydantic Schemas

```python
# schemas.py
from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class ArticleCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    content: str = Field(..., min_length=10)
    published: bool = False

class ArticleResponse(BaseModel):
    id: int
    title: str
    content: str
    published: bool
    created_at: datetime

    class Config:
        from_attributes = True
```

## Building the API

```python
# main.py
from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from database import get_db, engine, Base
from models import Article
from schemas import ArticleCreate, ArticleResponse

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Blog API",
    description="A modern blog API built with FastAPI",
    version="1.0.0"
)

@app.get("/articles", response_model=List[ArticleResponse])
async def list_articles(
    skip: int = 0,
    limit: int = 20,
    db: Session = Depends(get_db)
):
    """Fetch all published articles with pagination."""
    articles = db.query(Article).filter(
        Article.published == True
    ).offset(skip).limit(limit).all()
    return articles

@app.post("/articles", response_model=ArticleResponse, status_code=201)
async def create_article(
    article: ArticleCreate,
    db: Session = Depends(get_db)
):
    """Create a new article."""
    db_article = Article(**article.model_dump())
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

@app.get("/articles/{article_id}", response_model=ArticleResponse)
async def get_article(article_id: int, db: Session = Depends(get_db)):
    """Get a single article by ID."""
    article = db.query(Article).filter(Article.id == article_id).first()
    if not article:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Article not found"
        )
    return article

@app.delete("/articles/{article_id}", status_code=204)
async def delete_article(article_id: int, db: Session = Depends(get_db)):
    """Delete an article."""
    article = db.query(Article).filter(Article.id == article_id).first()
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    db.delete(article)
    db.commit()
```

## Running the Server

```bash
uvicorn main:app --reload --port 8000
```

Visit `http://localhost:8000/docs` to see the auto-generated Swagger documentation!

## Performance Comparison

| Framework   | Requests/sec | Language   |
| ----------- | ------------ | ---------- |
| FastAPI     | ~15,000      | Python     |
| Express.js  | ~14,000      | JavaScript |
| Flask       | ~4,000       | Python     |
| Django REST | ~3,500       | Python     |

## Conclusion

FastAPI is an excellent choice for building production-ready APIs. Its combination of speed, type safety, and auto-documentation makes it a joy to work with. In the next tutorial, we'll add JWT authentication and deploy to production with Docker.
