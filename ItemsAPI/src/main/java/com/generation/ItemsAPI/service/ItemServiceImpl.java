package com.generation.ItemsAPI.service;

import com.generation.ItemsAPI.entity.Item;
import com.generation.ItemsAPI.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ItemServiceImpl implements ItemService{

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item saveItem(Item item) {
        return null;
    }

    @Override
    public List<Item> fetchItemList() {
        return itemRepository.findAll();
    }

    @Override
    public Item fetchItemById(Long itemId) {
        return itemRepository.findById(itemId).get();
    }

    @Override
    public void deleteItemById(Long itemId) {
        itemRepository.deleteById(itemId);
    }

    @Override
    public Item updateItem(Long itemId, Item item) {
        Item itemdto = itemRepository.findById(itemId).get();
        if (Objects.nonNull(item.getName()) && !"".equalsIgnoreCase(item.getName())) {
            itemdto.setName(item.getName());
        }
        if (Objects.nonNull(item.getText()) && !"".equalsIgnoreCase(item.getText())) {
            itemdto.setText(item.getText());
        }
        if (Objects.nonNull(item.getImg()) && !"".equalsIgnoreCase(item.getImg())) {
            itemdto.setImg(item.getImg());
        }
        if (Objects.nonNull(item.getAuthor()) && !"".equalsIgnoreCase(item.getAuthor())) {
            itemdto.setAuthor(item.getAuthor());
        }

        return itemRepository.save(itemdto);

    }


}
