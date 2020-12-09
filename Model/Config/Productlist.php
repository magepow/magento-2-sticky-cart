<?php

/**
 * @Author: Ha Manh
 * @Date:   2020-12-09 16:21:38
 * @Last Modified by:   Ha Manh
 * @Last Modified time: 2020-12-09 16:21:58
 */
namespace Magepow\Stickycart\Model\Config;
 
use Magento\Framework\Option\ArrayInterface;
 
class Productlist implements ArrayInterface
{
	protected $collectionFactory;
 
	public function __construct(
        \Magento\Catalog\Model\ResourceModel\Product\CollectionFactory $collectionFactory
	) {
        $this->collectionFactory = $collectionFactory;
	}
 
	public function toOptionArray()
	{
    	$collection = $this->collectionFactory->create();
    	$collection
   	     ->addAttributeToSelect('sku')
            ->addAttributeToSelect('name');
 
    	$ret    	= [];
    	foreach ($collection as $product) {
        	$ret[] = [
            	'value' => $product->getSku(),
            	'label' => $product->getName(),
        	];
    	}
    	return $ret;
	}
}