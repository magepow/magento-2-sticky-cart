<?php
/*
 * @category: Magepow
 * @copyright: Copyright (c) 2014 Magepow (http://www.magepow.com/)
 * @licence: http://www.magepow.com/license-agreement
 * @author: MichaelHa
 * @create date: 2019-06-14 17:19:50
 * @LastEditors: MichaelHa
 * @LastEditTime: 2019-06-29 12:45:32
 */
namespace Magepow\Stickycart\Helper;

class Data extends \Magento\Framework\App\Helper\AbstractHelper
{
    /**
     * @var array
     */
    protected $configModule;

    /**
     * @var \Magento\Framework\Json\Helper\Data
     */
    protected $jsonHelper;

    public function __construct(
        \Magento\Framework\App\Helper\Context $context,
        \Magento\Framework\Json\Helper\Data $jsonHelper
    )
    {
        parent::__construct($context);
        $this->configModule = $this->getConfig(strtolower($this->_getModuleName()));
        $this->jsonHelper = $jsonHelper;
    }

    public function getConfig($cfg='')
    {
        if($cfg) return $this->scopeConfig->getValue( $cfg, \Magento\Store\Model\ScopeInterface::SCOPE_STORE );
        return $this->scopeConfig;
    }

    public function getConfigModule($cfg='', $value=null)
    {
        $values = $this->configModule;
        if( !$cfg ) return $values;
        $config  = explode('/', $cfg);
        $end     = count($config) - 1;
        foreach ($config as $key => $vl) {
            if( isset($values[$vl]) ){
                if( $key == $end ) {
                    $value = $values[$vl];
                }else {
                    $values = $values[$vl];
                }
            } 

        }
        return $value;
    }

    public function isEnabled()
    {
        return $this->getConfigModule('general/enabled');
    }
    public function getWidthImage()
    {
        return $this->getConfigModule('general/width_image');
    }
    public function getHeightImage()
    {
        return $this->getConfigModule('general/height_image');
    }
    public function getHeightScroll()
    {
        return $this->getConfigModule('general/height_scroll');
    }

    public function getExcludeProducts()
    {
        return $this->getConfigModule('general/exclude_products');
    }

    public function getStickyCartConfigJson($product)
    {   
        $data = [
            "typeProduct"   => $product->getTypeId(),
            "scrollHeight"  => $this->getConfigModule('general/height_scroll'),
            "hiddenBottom"  => $this->getConfigModule('general/hidden_bottom')
        ];
        foreach ($data as $key => $value) {
            if(is_numeric($value)){
                $data[$key] = (float) $value;
                continue;
            }
            $value = filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
            if(!is_null($value)){
                $data[$key] = $value; 
            }
        }
        return $this->jsonHelper->jsonEncode($data);
    }

}