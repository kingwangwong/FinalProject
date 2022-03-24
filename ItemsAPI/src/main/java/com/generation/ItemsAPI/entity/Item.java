package com.generation.ItemsAPI.entity;
import javax.persistence.*;

@Entity
//@Table(name = "ITEM")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long itemId;
    //@Column(name="NAME")
    private String name;
    //@Column(name="TEXT")
    private String text;
    //@Column(name="IMG")
    private String img;
    //@Column(name="AUTHOR")
    private String author;
    //@Column(name="CREATEDAT")
    private String createdAt;

    public Item(Long itemId, String name, String text, String img, String author, String createdAt) {
        this.itemId = itemId;
        this.name = name;
        this.text = text;
        this.img = img;
        this.author = author;
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Item{" +
                "itemId=" + itemId +
                ", name='" + name + '\'' +
                ", text='" + text + '\'' +
                ", img='" + img + '\'' +
                ", author='" + author + '\'' +
                ", createdAt='" + createdAt + '\'' +
                '}';
    }

    public Item() {
    }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
